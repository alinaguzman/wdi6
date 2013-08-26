Wdi6::Application.routes.draw do
	class XHRConstraint
	  def matches?(request)
	    !request.xhr? && !(request.url =~ /\.json$/ && ::Rails.env == 'development')
	  end
	end

	get '(*url)' => 'site#index', :constraints => XHRConstraint.new
  root to: 'site#index'

end
