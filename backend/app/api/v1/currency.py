from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app import schemas, crud
from app.api.deps import get_db

router = APIRouter()


@router.get("/")
def get_all_currencies_and_rates(db: Session = Depends(get_db), skip: int = 0, limit: int = 100) -> Any:
    """
    get all the rates of all the currencies.
    """
    currencies = crud.currency.get_multi(db, skip=skip, limit=limit)
    return currencies


@router.get("/currencies")
def get_all_currencies(db: Session = Depends(get_db)):
    """Get all currencies"""
    currencies = crud.currency.get_all_currencies(db)

    # Parse data
    data = {
        "success": True,
        "status_code": 200,
        "currencies": currencies
    }

    return data
