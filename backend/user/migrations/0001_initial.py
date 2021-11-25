# Generated by Django 3.2.7 on 2021-11-10 06:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.TextField()),
                ('password', models.TextField()),
                ('phone', models.TextField()),
                ('name', models.TextField()),
                ('birth', models.TextField()),
                ('address', models.TextField()),
            ],
            options={
                'db_table': 'users',
            },
        ),
    ]