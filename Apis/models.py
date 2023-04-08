from sqlalchemy import Column, Integer, String
from database import Base

class Country(Base):
    __tablename__ = "Countries"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(255))
    shortName = Column(String(255))
    
    def __init__(self, name, code):
        self.name = name
        self.shortName = code 
    