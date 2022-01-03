class FriendsController < ApplicationController
  before_action :authenticate_user! 

  def index
    render json: User.friends(current_user.friends)
  end

  def update
    # add id to array
  current_user.connected_friends << params[:id.to_i]
  
  current_user.save
  end
end
