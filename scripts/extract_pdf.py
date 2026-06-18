#!/usr/bin/env python3
import fitz
import os
import sys

PDF_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'resourese', 'Karan .pdf')
OUT_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'frontend', 'src', 'assets', 'profile')

os.makedirs(OUT_DIR, exist_ok=True)

def save_images(doc):
    images = []
    for pno in range(len(doc)):
        page = doc[pno]
        for img_index, img in enumerate(page.get_images(full=True), start=1):
            xref = img[0]
            pix = fitz.Pixmap(doc, xref)
            img_name = f'profile_p{pno+1}_img{img_index}.png'
            out_path = os.path.join(OUT_DIR, img_name)
            if pix.n < 5:
                pix.save(out_path)
            else:
                pix = fitz.Pixmap(fitz.csRGB, pix)
                pix.save(out_path)
            images.append(img_name)
            pix = None
    return images

def extract_text(doc):
    parts = []
    for pno in range(len(doc)):
        page = doc[pno]
        txt = page.get_text("text")
        if txt.strip():
            parts.append(txt.strip())
    return "\n\n".join(parts)

def write_content_js(text, images):
    js_path = os.path.join(OUT_DIR, 'content.js')
    with open(js_path, 'w', encoding='utf-8') as f:
        # write imports
        for i, img in enumerate(images):
            f.write(f"import img{i} from './{img}';\n")
        f.write('\n')
        # export content
        f.write('export const profileContent = {\n')
        # escape backticks in text
        safe_text = text.replace('`', '\\`')
        f.write('  text: `')
        f.write(safe_text)
        f.write('`,\n')
        f.write('  images: [')
        f.write(', '.join([f'img{i}' for i in range(len(images))]))
        f.write(']\n')
        f.write('};\n')
        f.write('\nexport default profileContent;\n')

def main():
    if not os.path.exists(PDF_PATH):
        print('PDF not found at', PDF_PATH)
        sys.exit(2)
    doc = fitz.open(PDF_PATH)
    print(f'Opened PDF: {PDF_PATH} ({len(doc)} pages)')
    images = save_images(doc)
    print(f'Extracted {len(images)} images')
    text = extract_text(doc)
    write_content_js(text, images)
    print('Wrote content.js and images to', OUT_DIR)

if __name__ == '__main__':
    main()
