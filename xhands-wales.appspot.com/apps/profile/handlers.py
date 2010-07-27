# -*- coding: utf-8 -*-

"""
Handles user profile

"""

from tipfy import RequestHandler, Response
from tipfy.ext.jinja2 import render_response

from tipfy import get_config

from site import site

class ProfileHandler(RequestHandler):
	def get(self):
		#context = { 'site': site, 'load_ext' = true}
		#context['page_title'] = "Profile"
		
		return render_response('pages/profile.html', 
								site=site, page_title="Profile", load_ext=True
		)
