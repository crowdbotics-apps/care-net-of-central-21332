# Generated by Django 2.2.16 on 2020-10-10 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("course", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="parenting",
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
