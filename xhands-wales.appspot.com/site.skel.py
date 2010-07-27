# -*- coding: utf-8 -*-

"""
### Site Configuration ###

Copy the file 
site.skel.py 
to 
site.py

Then modify the vars below


"""
site = {

	# admin email. Note this MUST be one of the developer accounts
	'email.admin':  'user@gmail.com',

	# general incoming email
	'email.inbox':  'webmaster@example.com',

	# Name of the site
	'name':         'My Website',

	# title at the top
	'title':        "Tje Foo Bar local listing",
	
	"""
	Set this CDN variable if using a CDN for the javascript lids and css
	 ie the ext libs, reset css etc (standard stuff)
	in template its
	<script src="{{site.CDN}}/js/ext...etc
	"""
	'CDN':          '',
	##'CDN':          'http://ffs-cache.appspot.com',

	## Default maps vars.. soon in Database
	'DEFAULT_LAT':  '51.796812149158164',
	'DEFAULT_LNG':  '-4.083539843559265',

	'CENTER_LAT':   '51.793826178175635',
	'CENTER_LNG':   '-4.080600142478943',

	## Site Navigation ##
	# ( /url, endpoint, label, security
	# Security: None = public always, 0 = when logged off, 1 when logged in
	'nav': [
		('/', 'index', 'Index', None),
		('/map', 'map', 'Map', None),
		('/directory', 'directory', 'Directory', None),
		('/classifieds', 'classifieds', 'Classifieds', None),
		('/rpxauth', 'rpxauth', 'Rpx Login', 0),
		('/auth', 'auth', 'Tipfy Login', 0),
		('/profile', 'profile', 'My Profile', 1),
		#('javascript:signOut();', 'about', 'Sign Off', 1),
		('/_ah/tipfy', 'tipfy', 'Tipfy Console', None),
	] 

}