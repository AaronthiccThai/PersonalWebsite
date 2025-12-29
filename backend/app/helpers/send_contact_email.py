import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_contact_email(name, email, message):
  sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))

  mail = Mail(
    from_email=os.getenv("SENDER_EMAIL"),
    to_emails=os.getenv("SENDER_EMAIL"),  # send to yourself
    subject=f"New Contact Form Message from {name}",
    html_content=f"""
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    """
  )

  response = sg.send(mail)
  return response.status_code
