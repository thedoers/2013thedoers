module SiteHelpers

  def page_title
    title = "Rewend"
    if data.page.title
      title << " | " + data.page.title
    end
    title
  end

  def check_environment
    puts "checking environments variable"
    if  defined?(ENV["ENVIRONMENT"])
      puts ENV["ENVIRONMENT"]
    end
  end

  def environment
    environment = "development"
    if  defined?(ENV["ENVIRONMENT"])
      environment = ENV["ENVIRONMENT"]
    end
    environment
  end

  def page_metas
    metas = ""
    if data.page.metas
     metas = partial("metas/"+data.page.metas)
    end
    metas
  end
  
  def page_description
    if data.page.description
      description = data.page.description
    end
    description
  end


end