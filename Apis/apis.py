from fastapi import FastAPI, Depends, Request
from sqlalchemy.orm import Session
from models import Country
from database import SessionLocal

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
    
@app.get("/countries")
def read_countries(db: Session = Depends(get_db)):
    countries = db.query(Country).all()
    return countries

# insert with postman (body: json) from link https://www.npmjs.com/package/flag-icons?activeTab=code
@app.post("/countries")
async def insert_countries(countriesIn: Request, db: Session = Depends(get_db)):
    countriesJson = await countriesIn.json()
    countries = []    
    for countryJson in countriesJson:
        country = Country(countryJson["name"], countryJson["code"])
        countries.append(country)
    
    db.add_all(countries)
    db.commit()
    return True

@app.delete("/countries")
def delete_countries(db: Session = Depends(get_db)):
    db.query(Country).delete()
    db.commit()
    return True