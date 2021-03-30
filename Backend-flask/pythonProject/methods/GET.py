class Tarea(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), unique=True)
    descripcion = db.Column(db.String(200))


    def __init__ (self, titulo, descripcion):
        self.titulo = titulo
        self.descripcion = descripcion
