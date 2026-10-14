$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$prefix = "http://127.0.0.1:4173/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving $root at $prefix"
$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".json" = "application/json"
  ".ico"  = "image/x-icon"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".webp" = "image/webp"
}
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart("/"))
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = "index.html" }
  if ($rel.EndsWith("/")) { $rel += "index.html" }
  $path = Join-Path $root ($rel -replace "/", [IO.Path]::DirectorySeparatorChar)
  $full = [IO.Path]::GetFullPath($path)
  if (-not $full.StartsWith([IO.Path]::GetFullPath($root))) {
    $ctx.Response.StatusCode = 403
    $ctx.Response.Close()
    continue
  }
  if ((Test-Path $full -PathType Container)) { $full = Join-Path $full "index.html" }
  if (Test-Path $full -PathType Leaf) {
    $bytes = [IO.File]::ReadAllBytes($full)
    $ext = [IO.Path]::GetExtension($full).ToLowerInvariant()
    $ctx.Response.ContentType = $(if ($types.ContainsKey($ext)) { $types[$ext] } else { "application/octet-stream" })
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
    $msg = [Text.Encoding]::UTF8.GetBytes("Not found")
    $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
  }
  $ctx.Response.Close()
}
