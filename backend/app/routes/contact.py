from flask import Blueprint, request, jsonify
from ..helpers import send_contact_email
import re

contact_bp = Blueprint('contact', __name__)

def validate_email(email):
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None
  
  
@contact_bp.route('/contact', methods=['POST'])
def contact():
  data = request.get_json()
  if not data:
    return jsonify({"error": "Invalid JSON data"}), 400

  name = data.get('name') 
  email = data.get('email')
  message = data.get('message')
  errors = {}
  if not name:
    errors['name'] = 'Name is required'
  elif len(name) < 2:
    errors["name"] = "Name must be at least 2 characters"  

  if not email:
    errors['email'] = 'Email is required'
  elif not validate_email(email):
    errors['email'] = 'Invalid email format'

  if not message:
    errors['message'] = 'Message is required'
  elif len(message) < 10:
    errors['message'] = 'Message must be at least 10 characters'
  if errors:
    return jsonify({"errors": errors}), 400
  try:
    send_contact_email(name, email, message)
    return jsonify({"message": "Message sent successfully"}), 200
  except Exception as e:
    print(e)
    return jsonify({"error": "Failed to send email"}), 500