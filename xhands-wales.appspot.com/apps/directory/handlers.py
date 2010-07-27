# -*- coding: utf-8 -*-

from tipfy import RequestHandler, Response
from tipfy.ext.jinja2 import render_response

from tipfy import get_config

from site import site

class DirectoryHandler(RequestHandler):
	def get(self):
		context = { 'site': site}
		context['page_title'] = "Directory"
		
		return render_response('pages/directory.html', **context)
