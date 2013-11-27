activate :deploy do |deploy|
    deploy.method = :ftp
    deploy.host = "web332.webfaction.com"
    deploy.user = "piermaria"
    deploy.password = "Nonmelaricordo2"
    deploy.path = "/home/piermaria/webapps/thedoers2013"
    deploy.build_before = true
end

require 'builder'

page "/", :layout => :html5
page "/404.html", :layout => :html5
page "/events/2013/How-to-craft-a-perfect-user-Experience-even-with-a-rough-MVP.html", :layout => :html5
page "/events/2013/thank-you-ixdt1113.html", :layout => :html5

page "/newsletters/ixdt1113_post.html"
page "/sitemap.xml", :layout => false




require 'susy'


set :css_dir, 'css'

set :js_dir, 'js'

set :images_dir, 'images'


set :fonts_dir, 'fonts'

activate :automatic_image_sizes

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  
  # # Minify Javascript on build
  activate :minify_javascript
  activate :minify_html
  # # Create favicon/touch icon set from source/favicon_base.png
  activate :favicon_maker
  
  # # Enable cache buster
  activate :cache_buster
  #activate :image_optim
  
  # # Use relative URLs
  #activate :relative_assets
  # # To put width and height inside tag and to compression

  activate :gzip
  #activate :smusher
  
  # Or use a different image path
  #set :http_path, "http://thedoers.co/"
end
