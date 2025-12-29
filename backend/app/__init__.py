from flask import Flask
from flask_cors import CORS
from app.routes import contact_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Register blueprints
    app.register_blueprint(contact_bp)

    return app
