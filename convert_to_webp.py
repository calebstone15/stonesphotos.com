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


def convert_image_to_webp(input_path, output_path, quality=85, method=6):
    """
    Convert an image to WebP format.

    Args:
        input_path (str): Path to the input image.
        output_path (str): Path to save the output WebP image.
        quality (int): Quality of the output image (0-100).
        method (int): Compression method (0-6).

    Returns:
        dict: A dictionary containing conversion details (original_size, webp_size, reduction).
    """
    with Image.open(input_path) as img:
        # Convert to RGB if necessary (for images with transparency)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Keep alpha channel for WebP
            img = img.convert('RGBA')
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # Save as WebP with good quality
        img.save(output_path, 'WEBP', quality=quality, method=method)

    # Get file sizes for comparison
    original_size = os.path.getsize(input_path)
    webp_size = os.path.getsize(output_path)
    reduction = ((original_size - webp_size) / original_size) * 100

    return {
        "original_size": original_size,
        "webp_size": webp_size,
        "reduction": reduction
    }


def get_input_path():
    """Open file dialog to select input image."""
    filetypes = [
        ("Image files", "*.png *.jpg *.jpeg *.gif *.bmp *.tiff *.tif *.webp"),
        ("PNG files", "*.png"),
        ("JPEG files", "*.jpg *.jpeg"),
        ("GIF files", "*.gif"),
        ("BMP files", "*.bmp"),
        ("TIFF files", "*.tiff *.tif"),
        ("All files", "*.*")
    ]

    return filedialog.askopenfilename(
        title="Select an image to convert to WebP",
        filetypes=filetypes
    )


def get_save_path(input_path):
    """Open file dialog to select save location."""
    input_file = Path(input_path)
    output_path = input_file.with_suffix('.webp')

    return filedialog.asksaveasfilename(
        title="Save WebP file as",
        defaultextension=".webp",
        filetypes=[("WebP files", "*.webp")],
        initialfile=output_path.name,
        initialdir=input_file.parent
    )


def select_and_convert_to_webp():
    """Open a file dialog to select an image and convert it to WebP format."""

    # Create a hidden root window for the file dialog
    root = tk.Tk()
    root.withdraw()
    root.lift()
    root.attributes('-topmost', True)

    input_path = get_input_path()

    if not input_path:
        print("No file selected. Exiting.")
        root.destroy()
        return

    print(f"Selected: {input_path}")

    save_path = get_save_path(input_path)

    if not save_path:
        print("No save location selected. Exiting.")
        root.destroy()
        return

    try:
        stats = convert_image_to_webp(input_path, save_path)

        success_msg = (
            f"Successfully converted to WebP!\n\n"
            f"Saved to: {save_path}\n\n"
            f"Original size: {stats['original_size'] / 1024:.1f} KB\n"
            f"WebP size: {stats['webp_size'] / 1024:.1f} KB\n"
            f"Size reduction: {stats['reduction']:.1f}%"
        )

        print(success_msg)
        messagebox.showinfo("Conversion Complete", success_msg)

    except OSError as e:
        error_msg = f"Error converting image: {str(e)}"
        print(error_msg)
        messagebox.showerror("Conversion Error", error_msg)
    except Exception as e: # pylint: disable=broad-exception-caught
        error_msg = f"Unexpected error: {str(e)}"
        print(error_msg)
        messagebox.showerror("Error", error_msg)

    root.destroy()


if __name__ == "__main__":
    print("Image to WebP Converter")
    print("-" * 30)
    select_and_convert_to_webp()
