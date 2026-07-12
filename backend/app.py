from flask import Flask, request, jsonify
import os 
app = Flask(__name__)

"""
Comment
"""
@app.route("/test")
def test_function():
    result = {"Hello! This is a test."}

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
