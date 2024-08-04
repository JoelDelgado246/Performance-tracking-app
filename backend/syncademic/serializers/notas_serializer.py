from rest_framework import serializers
from ..models.notas import HistorialNotas


class NotasSerializer(serializers.ModelSerializer):
    tipo_actividad_nombre = serializers.CharField(source='tipo_actividad.nombre_tipo',
                                                  read_only=True)

    class Meta:
        model = HistorialNotas
        fields = ["id_estudiante",
                  "nota",
                  "tipo_actividad_nombre",
                  "tema"]
