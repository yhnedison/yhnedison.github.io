source "https://rubygems.org"

ruby "3.3.4"

gem "github-pages", "~> 233", group: :jekyll_plugins

# Patched transitive dependency versions for CVE-2026-71847 and CVE-2026-85396.
gem "json", "~> 2.21.2"
gem "rubyzip", "~> 3.4.0", require: false

gem "faraday-retry"
gem "webrick"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw]

group :development do
  gem "bundler-audit", "~> 0.9.3", require: false
end
