# IntergrowUI-React





**************
npm i -g create-react-app
**First install the create-react-app package

create-react-app expense-manager
**create a new folder called expense-manager
  and install the react dependencies

==
npm start
==

cd expense-manager
npm i axios react-bootstrap react-modal react-router-dom --SAVE
**Do not forget to put ‘ — SAVE’ at the end as it will update the package.json file.

*axios will be used to send requests to server to fetch or insert data.
*react-bootstrap lets us use bootstrap components with React.
*react-modal lets us create a modal dialog in React.
*react-router-dom lets us use React router.

**************
if react-dom missed**
npm i react react-dom react-router-dom --save
**it will work
import { HashRouter } from 'react-router-dom'
**************

*****issue
Module not found: Can't resolve '@material-ui/core/AppBar'
npm install  @material-ui/core**
once add the dependencey problem will resolved
*****

****issue
Module not found: Can't resolve 'mdbreact' 
npm install --save mdbreact
******

****built-in CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
***
import 'bootstrap/dist/css/bootstrap.min.css';
npm install bootstrap --save 
***


****
npm install axios --save
****

********************************************
cutom way
===
**need to add a middleware file app/cors.py:
class CorsMiddleware(object):
    def process_response(self, req, resp):
        response["Access-Control-Allow-Origin"] = "*"
        return response

This will add an Access-Control-Allow-Origin:
* header to every Django request but before that you need to add it to the list of middleware classes:
MIDDLEWARE_CLASSES = (
    #...
    'app.CorsMiddleware' 
)

**OR
Using django-cors-headers
======
pip install django-cors-headers

**settings.py

INSTALLED_APPS = (
    ##...
    'corsheaders'
)

MIDDLEWARE_CLASSES = (
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.BrokenLinkEmailsMiddleware',
    'django.middleware.common.CommonMiddleware',
    #...
)

**enable CORS for all domains 
CORS_ORIGIN_ALLOW_ALL = True
**

***
CORS_ORIGIN_ALLOW_ALL = False

CORS_ORIGIN_WHITELIST = (
    'http//:localhost:8000',
)
*****






