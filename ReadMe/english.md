# Techmax – Online Shop with Django & PayPal

This is a practice project based on the excellent Django tutorial by **Fabian Heihoff** (Programmiern Starten).  
It has been extended and customized to include features such as a cookie-based shopping cart, PayPal sandbox payment, guest checkout, and a modern UI using Bootstrap.

**Original tutorial on programmiern-starten.de:**  
https://programmiern-starten.de/

---

## Features

- Product listing with images and prices
- Shopping cart system for guests (via cookie) and registered users (via POST)
- Order summary page with dynamic table
- Checkout form with delivery address
- PayPal integration via sandbox
- Bootstrap-based responsive design (v5.3)
- Flash messages with automatic fade-out
- Admin backend for managing products and orders

---

## Project Structure

```
techmax/
├── Pipfile            # pipenv configuration
├── Pipfile.lock       # locked dependency versions
├── ReadMe             # project documentation
├── db.sqlite3         # local SQLite database
├── manage.py          # Django CLI
├── shop/              # main Django app (views, models, templates)
├── static/            # custom static files
├── staticfiles/       # collected static files for deployment
├── techmax/           # project settings and URLs
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/techmax.git
cd techmax
```

### 2. Create virtual environment with pipenv

```bash
pipenv install
pipenv shell
```

### 3. Run migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 4. Create superuser

```bash
python manage.py createsuperuser
```

### 5. Start development server

```bash
python manage.py runserver
```

---

## PayPal Sandbox Setup

1. Visit: [https://developer.paypal.com](https://developer.paypal.com)
2. Create a new app under the **Sandbox** section and copy:
   - `CLIENT_ID`
   - `SECRET`

3. Add these values to your `.env` or `settings.py`:

```python
PAYPAL_CLIENT_ID = "..."
PAYPAL_SECRET = "..."
```

4. Use a **sandbox buyer account** to test payment flows  
   → This will be used at checkout via PayPal login

---

## Test Flow (Guest)

1. Click on a product → press "Order"
2. Shopping cart updates automatically
3. Fill out checkout form
4. Pay via PayPal using a sandbox test user
5. Successful order is saved in the backend

---

## Notes

- The shopping cart for guests is saved as a JSON cookie (`document.cookie`)
- The cookie is deleted after a successful order
- Logged-in users update the cart via POST (`/artikel_backend/`)
- After submitting the checkout form, the user is redirected to the homepage

---

## Debugging

- If the PayPal button does not appear:
  - Check if the `warenkorb` cookie exists and is valid
  - Disable aggressive browser protections (e.g., Brave Shields)
  - Check developer console for JavaScript errors

- If `pipenv` fails:
  - Make sure you're using **Python 3.12** (not 3.13)

---

## Dependencies

- Django
- django-paypal
- pipenv
- Bootstrap (via CDN)
- JavaScript (native DOM and fetch API)

---

## Planned Improvements

### Responsiveness
- The layout needs to be optimized for smartphones and small screen devices
- Currently, grid components (e.g., product list, checkout page) are not fully responsive
- ToDo:
  - Review Bootstrap utility classes like `col-12`, `col-sm-6`, `d-flex`, `flex-column`, `gap-2`
  - Add custom CSS or media queries if needed

### Product Window Feedback
- After clicking "Order", a small confirmation window with the product ID appears
- Currently, this window disappears too quickly and cannot be manually closed
- ToDo:
  - Extend display duration (e.g., via `setTimeout`)
  - Add optional "Close" button
  - Improve usability, including animations and better mobile positioning

---

## Author


---

## License

This project is intended for educational purposes and is not licensed for commercial use.  
For commercial inquiries, please get in touch.
