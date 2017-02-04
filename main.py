import webapp2

#-----------------------------------------------------------------------------------------------
# CALLED FROM APPLICATION AT BOTTOM
#-----------------------------------------------------------------------------------------------
class MainPage(webapp2.RequestHandler):
    def get(self):

        #INDEX_HTML = open('app/index_1.html').read()
        #self.response.out.write(INDEX_HTML)

        INDEX_HTML_1 = open('app/index_1.html').read()
        INDEX_HTML_2 = open('app/index_2.html').read()

        if "Android" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)
        elif "iPhone" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)
        elif "iPad" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)
        elif "iPod" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)
        elif "BlackBerry" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)
        elif "IEMobile" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)
        elif "Opera Mini" in self.request.headers["User-Agent"]:
          self.response.out.write(INDEX_HTML_1)

        else:
          self.response.out.write(INDEX_HTML_1)


#-----------------------------------------------------------------------------------------------
# CALLED FROM APP.YAML
#-----------------------------------------------------------------------------------------------
application = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)