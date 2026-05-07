import re

files = ['index.html', 'index.css', 'index.js']

replacements = [
    ('#EFE7DC', '#000000'), 
    ('#F5EFE6', '#000000'), 
    ('#091434', '#FFFFFF'),
    ('#111029', '#FFFFFF'),
    ('#F5F5F5', '#1a1a1a'), # For input fields background
]

css_replacements = [
    ('background: white', 'background: #111111'),
    ('background: #fff', 'background: #111111'),
]

def replace_ignore_case(text, old, new):
    return re.sub(re.escape(old), new, text, flags=re.IGNORECASE)

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    for old, new in replacements:
        content = replace_ignore_case(content, old, new)
        
    if f == 'index.css':
        for old, new in css_replacements:
            content = content.replace(old, new)
            
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Replacement Complete.")
