# -*- coding: utf-8 -*-

# idea for tipfy console 

# appears at /_ah/tipfy


from tipfy import RequestHandler, Response
from tipfy.ext.jinja2 import render_response

from tipfy import  import_string
import config


class TipfyHandler(RequestHandler):
	def get(self):

	
		## t is a shortcut to tipfy config
		t = config.config['tipfy']
		
		context = {}

		## list of middleware
		context['middleware'] = t['middleware']
		
		
		## Installed Apps
		apps = []
		urls = []
		handlers = []
		for app_module in sorted(t['apps_installed']):
			try:
				# Load the urls module from the app and extend our rules.
				app_rules = import_string('%s.urls' % app_module)
				rules = app_rules.get_rules(app_rules)
				rlist = []
				for r in rules:
					rlist.append({'handler': r.handler, 'endpoint': r.endpoint, 'url': r.rule})
					urls.append(r.rule)
					handlers.append(r.handler)
				apps.append({'app': app_module, 'rules': rlist});
			except ImportError:
				pass
		context['apps'] = apps 
		context['urls'] = sorted(urls)
		context['handlers'] = sorted(handlers)

		## TODO move the template to unders here, and append path
		return render_response('tipfy_console.html', **context)
