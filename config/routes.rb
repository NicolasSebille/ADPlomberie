Rails.application.routes.draw do


	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	# root 'application#hello'
	get 'welcome/index'
	# resources :articles do
	# 	resources :comments
	# end


	# get 'contact', to: 'contact#index'


	get 'realisations', to: 'realisations#index'
	get 'realisations/index', to: 'realisations#index'


	root 'welcome#index'


end
