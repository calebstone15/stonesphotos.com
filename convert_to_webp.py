#!/usr/bin/env python3
"""
Image to WebP Converter

A simple script that opens a file dialog to select an image from your device
and converts it to WebP format.

Requirements:
    pip install Pillow

Usage:
    python convert_to_webp.py
"""

import os
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow library is required.")
    print("Install it with: pip install Pillow")
    sys.exit(1)

import tkinter as tk
from tkinter import filedialog, messagebox


def select_and_convert_to_webp():
    """Open a file dialog to select an image and convert it to WebP format."""
    
    # Create a hidden root window for the file dialog
    root = tk.Tk()
    root.withdraw()
    root.lift()
    root.attributes('-topmost', True)
    
    # Supported image formats
    filetypes = [
        ("Image files", "*.png *.jpg *.jpeg *.gif *.bmp *.tiff *.tif *.webp"),
        ("PNG files", "*.png"),
        ("JPEG files", "*.jpg *.jpeg"),
        ("GIF files", "*.gif"),
        ("BMP files", "*.bmp"),
        ("TIFF files", "*.tiff *.tif"),
        ("All files", "*.*")
    ]
    
    # Open file dialog
    input_path = filedialog.askopenfilename(
        title="Select an image to convert to WebP",
        filetypes=filetypes
    )
    
    if not input_path:
        print("No file selected. Exiting.")
        root.destroy()
        return
    
    print(f"Selected: {input_path}")
    
    # Generate output path (same location, .webp extension)
    input_file = Path(input_path)
    output_path = input_file.with_suffix('.webp')
    
    # Ask user where to save (defaults to same directory with .webp extension)
    save_path = filedialog.asksaveasfilename(
        title="Save WebP file as",
        defaultextension=".webp",
        filetypes=[("WebP files", "*.webp")],
        initialfile=output_path.name,
        initialdir=input_file.parent
    )
    
    if not save_path:
        print("No save location selected. Exiting.")
        root.destroy()
        return
    
    try:
        # Open and convert the image
        with Image.open(input_path) as img:
            # Convert to RGB if necessary (for images with transparency)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Keep alpha channel for WebP
                img = img.convert('RGBA')
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save as WebP with good quality
            img.save(save_path, 'WEBP', quality=85, method=6)
        
        # Get file sizes for comparison
        original_size = os.path.getsize(input_path)
        webp_size = os.path.getsize(save_path)
        reduction = ((original_size - webp_size) / original_size) * 100
        
        success_msg = (
            f"Successfully converted to WebP!\n\n"
            f"Saved to: {save_path}\n\n"
            f"Original size: {original_size / 1024:.1f} KB\n"
            f"WebP size: {webp_size / 1024:.1f} KB\n"
            f"Size reduction: {reduction:.1f}%"
        )
        
        print(success_msg)
        messagebox.showinfo("Conversion Complete", success_msg)
        
    except Exception as e:
        error_msg = f"Error converting image: {str(e)}"
        print(error_msg)
        messagebox.showerror("Conversion Error", error_msg)
    
    root.destroy()


if __name__ == "__main__":
    print("Image to WebP Converter")
    print("-" * 30)
    select_and_convert_to_webp()
