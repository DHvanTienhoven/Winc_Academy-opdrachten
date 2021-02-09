__winc_id__ = 'ae539110d03e49ea8738fd413ac44ba8'
__human_name__ = 'files'


import os
import glob
from zipfile import ZipFile


def clean_cache():
    if os.path.exists('cache'):
        files = glob.glob('cache/*')
        for file in files:
            os.remove(file)
    else:
        os.mkdir('cache')


clean_cache()


def cache_zip(zip_file_path, cache_dir_path):
    my_zip_file = ZipFile(zip_file_path, 'r')
    my_zip_file.extractall(cache_dir_path)


cache_zip('data.zip', 'cache')


def cached_files():
    return glob.glob('cache/*')


def find_password(list):
    files = list
    interesting_files = []
    for file in files:
        if 'password' in open(file, 'r').read():
            interesting_files.append(file)
    lines = open(interesting_files[0], 'r').readlines()
    for line in lines:
        line.replace('\n', '')
        position = line.find('password')
        if position != -1:
            return line.split(' ')[1]
