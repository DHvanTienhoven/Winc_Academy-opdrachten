__winc_id__ = 'ae539110d03e49ea8738fd413ac44ba8'
__human_name__ = 'files'


import os
import zipfile


def clean_cache():
    return os.mkdir('cache')


# clean_cache()


def cache_zip(zip_file_path, cache_dir_path):
    return zipfile.ZipFile.extract(zip_file_path, cache_dir_path)


cache_zip('./data.zip', './cache')
