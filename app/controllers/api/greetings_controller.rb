class Api::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order('RANDOM()').first
    render json: @greetings
  end
end
