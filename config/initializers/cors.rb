Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'  # Update with your frontend origin
    resource '*', headers: :any, methods: [:get] # Update with the desired HTTP methods
  end
end