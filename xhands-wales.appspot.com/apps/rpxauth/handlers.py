# -*- coding: utf-8 -*-

from tipfy import RequestHandler, Response
from tipfy.ext.jinja2 import render_response

from tipfy import get_config

from site import site

class RpxAuthHandler(RequestHandler):
	def get(self):
		context = { 'site': site}
		context['page_title'] = "Rpx Auth"

		## TODO set to current server
		context['token_url'] = "http://localhost:8080/auth/rpx/"
		
		return render_response('pages/rpxauth.html', **context)
