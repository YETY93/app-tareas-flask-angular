from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS, cross_origin
from assets import configDB

from assets import configDB

app = Flask(__name__)



app.config.from_object(configDB)

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Tarea( db.Model ):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(100), unique=True, nullable = True)
    descripcion = db.Column(db.String(200))

    def __init__(self, titulo, descripcion):
        self.titulo = titulo
        self.descripcion = descripcion
db.create_all()

class EsquemaTarea(ma.Schema):
    class Meta():
        fields = ('id','titulo', 'descripcion')

esquema_tarea = EsquemaTarea()
esquemas_tareas = EsquemaTarea(many=True)

# routes

@app.route('/')
@cross_origin()
def Index():
    return render_template('index.html')

@app.route('/crear_tarea', methods=['POST'])
@cross_origin()
def crear_tarea():
    titulo = request.json['titulo']
    descripcion = request.json['descripcion']
    #fecha_creacion = datetime.datetime.now()

    nueva_tarea = Tarea(titulo,descripcion)
    db.session.add(nueva_tarea)
    db.session.commit()

    return esquema_tarea.jsonify(nueva_tarea)


@app.route('/traer_tareas', methods=['GET'])
@cross_origin()
def listar_tareas():
    listar_tareas = Tarea.query.all()
    resultado = esquemas_tareas.dump(listar_tareas)
    return jsonify(resultado)

@app.route('/consultar_tarea/<id>', methods=['GET'])
@cross_origin()
def consultar_tarea(id):
    tarea = Tarea.query.get(id)
    return esquema_tarea.jsonify(tarea)

@app.route('/actualizar_tarea', methods=['PUT'])
@cross_origin()
def actualizar_tarea(id):
    tarea = Tarea.query.get(id)

    titulo = request.json['titulo']
    descripcion = request.json['descripcion']
    tarea.titulo = titulo
    tarea.descripcion = descripcion

    db.session.commit()
    return esquema_tarea.jsonify(tarea)

@app.route('/eliminar_tareas/<id>', methods=['DELETE'])
@cross_origin()
def eliminar_tarea(id):
    tarea = Tarea.query.get(id)
    db.session.delete(tarea)
    db.session.commit()

    return esquema_tarea.jsonify(tarea)

if __name__ == "__main__":
    app.run(debug=False)
    PORT = 5000