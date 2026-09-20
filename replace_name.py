import os
import re

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        return
        
    original = content
    # Handle specific casings
    content = re.sub(r'Terranova', 'AgriScience', content)
    content = re.sub(r'TERRANOVA', 'AGRISCIENCE', content)
    content = re.sub(r'terranova', 'agriscience', content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk('.'):
    if '.git' in root: continue
    for file in files:
        if file.endswith(('.html', '.js', '.css', '.json', '.md')):
            replace_in_file(os.path.join(root, file))
