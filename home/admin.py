from django.contrib import admin
from django.contrib.sessions.models import Session
import json
from django.utils.html import format_html


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ['session_key', 'decoded_data', 'expire_date']
    readonly_fields = ['session_key', 'decoded_data', 'expire_date']
    
    def decoded_data(self, obj):
        try:
            data = obj.get_decoded()
            return format_html('<pre>{}</pre>', json.dumps(data, indent=2))
        except Exception as e:
            return str(e)
