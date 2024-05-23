extends CharacterBody2D

#variables o constantes es necesario que esten arriba del codigo porque, si no dara errores 
const SPEED = 300.0
const JUMP_VELOCITY = -900
const Gravity = 98
#aqui van las variables tipo @onready var que sirven para cambiar el nombre de un nodo
@onready var Anim = $AnimatedSprite2D
@onready var spr = $Sprite2D
#Aqui aplicaremos las fisicas de la gravedad, movimiento o salto con la func _physics_process.
func _physics_process(_delta):
	if not is_on_floor():
		$AnimatedSprite2D.play("fall")
		#para que la gravedad funcione hay que agregarla de esta manera:
		velocity.y += Gravity
		
	if Input.is_action_just_pressed("ata"):
		$attack/CollisionShape2D.disabled = false
		$AnimatedSprite2D.visible = false
		$Sprite2D.visible = true
		$AnimationPlayer.play("atacar")

#aqui es para configurar las teclas para aplicar el salto.
	if Input.is_action_just_pressed("saltar") and is_on_floor():
		$AnimatedSprite2D.play("jump")
		#para que el salto funcione hay que aplicar la velocidad.y, osea arriba y asignarle la fuerza para que salte.
		velocity.y = JUMP_VELOCITY

#aqui es para configurar las teclas para aplicar el movimiento de izquierda a derecha.
	var direction = Input.get_axis("ui_left", "ui_right")
	if direction:
		#para que el personaje se mueva hay que aplicar la direccion y velocidad.x, para que se mueva de izquierda a derecha.
		velocity.x = direction * SPEED
		$AnimatedSprite2D.play("run")
	
	if direction < 0:
		$attack/CollisionShape2D.position.x = -18.5
		Anim.flip_h = true
		spr.flip_h = true
	elif direction > 0:
		$attack/CollisionShape2D.position.x = 18.5
		Anim.flip_h = false
		spr.flip_h = false
		
#Aqui es por si no precionamos ninguna tecla el personaje se quede quieto o parado.
	else:
		$AnimatedSprite2D.play("idle")
		velocity.x = move_toward(velocity.x, 0, SPEED)
#Esta linea de codigo es para que todas las fisicas funcionen de lo contrario no funcionaran
	move_and_slide()
	
#En youtube hay tutoriales aqui vengo a enseñarte mi manera. Recuerda suscribirte y dejar tu Like.


func _on_animation_player_animation_finished(anim_name):
	match anim_name:
		"atacar":
			$AnimatedSprite2D.visible = true
			$Sprite2D.visible = false
			$attack/CollisionShape2D.disabled = true
			
	pass # Replace with function body.


func _on_attack_body_entered(body):
	if body.is_in_group("ene"):
		body.hit = true
	pass # Replace with function body.
