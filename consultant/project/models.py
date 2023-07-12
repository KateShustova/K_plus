from django.contrib.auth.models import UserManager
from django.db import models


class Poll(models.Model):
    id = models.IntegerField(primary_key=True)
    state = models.IntegerField()
    content = models.TextField()
    object = UserManager()

    def __str__(self):
        return self.content

