# Generated by Django 3.1.5 on 2021-02-15 13:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='organizationanalytic',
            old_name='oganization',
            new_name='organization',
        ),
        migrations.RenameField(
            model_name='organizationdetail',
            old_name='oganization',
            new_name='organization',
        ),
        migrations.RenameField(
            model_name='organizationprofile',
            old_name='oganization',
            new_name='organization',
        ),
        migrations.RenameField(
            model_name='organizationstaff',
            old_name='oganization',
            new_name='organization',
        ),
    ]
