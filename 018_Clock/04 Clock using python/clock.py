import tkinter as tk
import time
import math

# Constants for window dimensions
WIDTH = 400
HEIGHT = 400

# Initialize the tkinter window
root = tk.Tk()
root.title("Analog Clock")

# Create a canvas widget
canvas = tk.Canvas(root, width=WIDTH, height=HEIGHT, bg="white")
canvas.pack()

def update_clock():
    # Clear the canvas
    canvas.delete("all")
    
    # Get current time
    now = time.localtime()
    hour = now.tm_hour % 12
    minute = now.tm_min
    second = now.tm_sec
    
    # Draw clock face
    canvas.create_oval(2, 2, WIDTH-2, HEIGHT-2, outline="black", width=2)
    
    # Draw clock numbers
    for i in range(12):
        angle = i * math.pi / 6 - math.pi / 2
        x = WIDTH / 2 + 0.7 * WIDTH / 2 * math.cos(angle)
        y = HEIGHT / 2 + 0.7 * HEIGHT / 2 * math.sin(angle)
        if i == 0:
            canvas.create_text(x, y - 10, text="12", font=("Helvetica", 12))
        else:
            canvas.create_text(x, y, text=str(i), font=("Helvetica", 12))
    
    # Draw hour hand
    hour_angle = (hour + minute / 60.0) * 5.0 * math.pi / 6.0 - math.pi / 2
    hour_x = WIDTH / 2 + 0.5 * WIDTH / 2 * math.cos(hour_angle)
    hour_y = HEIGHT / 2 + 0.5 * HEIGHT / 2 * math.sin(hour_angle)
    canvas.create_line(WIDTH / 2, HEIGHT / 2, hour_x, hour_y, width=4, fill="blue")
    
    # Draw minute hand
    minute_angle = (minute + second / 60.0) * math.pi / 30.0 - math.pi / 2
    minute_x = WIDTH / 2 + 0.7 * WIDTH / 2 * math.cos(minute_angle)
    minute_y = HEIGHT / 2 + 0.7 * HEIGHT / 2 * math.sin(minute_angle)
    canvas.create_line(WIDTH / 2, HEIGHT / 2, minute_x, minute_y, width=3, fill="green")
    
    # Draw second hand
    second_angle = second * math.pi / 30.0 - math.pi / 2
    second_x = WIDTH / 2 + 0.8 * WIDTH / 2 * math.cos(second_angle)
    second_y = HEIGHT / 2 + 0.8 * HEIGHT / 2 * math.sin(second_angle)
    canvas.create_line(WIDTH / 2, HEIGHT / 2, second_x, second_y, width=1, fill="red")
    
    # Schedule the update every second
    root.after(1000, update_clock)

# Start the clock update
update_clock()

# Start the tkinter main loop
root.mainloop()
