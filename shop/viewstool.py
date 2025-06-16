import json
from . models import *


def gastCookie(request):
 # cokkie auslesen
        try:
            warenkorb = json.loads(request.COOKIES["warenkorb"])
        except:
            warenkorb = []
            
        artikels = []
        bestellung = {"gesamt_summe":0, "gesamt_menge": 0}
        menge = bestellung["gesamt_menge"]
       
        
        # menge
        for i in warenkorb:
            menge += warenkorb[i]["menge"]
            artikel = Artikel.objects.get(id=i)
            gesamtpreis = (artikel.preis * warenkorb[i]["menge"])
            bestellung["gesamt_summe"] += gesamtpreis
            bestellung["gesamt_menge"] += warenkorb[i]["menge"]
            
            artikel = {
                "artikel": {
                   "id" :artikel.id,
                   "name": artikel.name,
                   "preis": artikel.preis,
                   "bild": artikel.bild
                },
                "menge":warenkorb[i]["menge"],
                "get_summe": gesamtpreis
            }
            
            artikels.append(artikel)
        return {"artikels": artikels, "bestellung": bestellung }
    
#für Kasse -- daten stehen bei views in gesamtpreis ... und adressDaten in def bestellen
def getGastBestellung(request, daten):
    name = daten["benutzerDaten"]["name"]
    email = daten["benutzerDaten"]["email"]
    
    cookieDaten = gastCookie(request)
    artikels = cookieDaten["artikels"]
    
    kunde, created = Kunde.objects.get_or_create(email=email)
    kunde.name = name
    kunde.save()
    
    bestellung = Bestellung.objects.create(kunde=kunde, erledigt=False)
    
    for i in artikels:
        artikel = Artikel.objects.get(id=i["artikel"][id])
        bestellteArtikel = BestellteArtikel.objects.create(
            artikel=artikel,
            bestellung=bestellung,
            menge=i["menge"],
        )
    return kunde, bestellung 
    