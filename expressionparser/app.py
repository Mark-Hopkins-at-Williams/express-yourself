import math
from flask import Flask, render_template, url_for, request
from ast_parser import parse
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    parse_result = False
    app.logger.debug("hi from the server")
    if request.method == 'POST':
        form = request.form
        parse_result = handle_request(form)
    return render_template('index.html', parse_result=parse_result)


def handle_request(form):
    print(form)
    result = parse(request.form['hi'])
    return (result,)


if __name__ == "__main__":
  app.run(debug=True)