from django.db import models

# Create your models here.
#create the note model and ad its fields
class Note(models.Model):
    body = models.TextField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        # show only the 1st 50 characters
        return self.body[0:50]