# Generated by Django 4.2.3 on 2023-07-11 07:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='poll',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
