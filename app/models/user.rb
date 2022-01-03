# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  serialize :friends, Array
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  
  def self.friends(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id NOT IN (?)", ids).order("RANDOM()")  
  end

  def self.connected_friends(ids)
  ids = ids.e,pty? ? [0] : ids
  Friend.where("id IN (?)", ids)
  end
end
