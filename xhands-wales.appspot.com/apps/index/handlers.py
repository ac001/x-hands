# -*- coding: utf-8 -*-

from tipfy import RequestHandler, Response
from tipfy.ext.jinja2 import render_response

from tipfy import get_config

from site import site

class IndexHandler(RequestHandler):
	def get(self):
		context = { 'site': site}
		context['page_title'] = "PAGE TITLE"
		context['page_title'] = "PAGE TITLE"
		context['page_title'] = "PAGE TITLE"
		context['page_title'] = "PAGE TITLE"
		context['page_title'] = "PAGE TITLE"

		#return render_response('main_container.html', **context)
		return render_response('pages/index.html', **context)
