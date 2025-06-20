import { Component, EventEmitter, Output } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentDataService } from '../comment-data.service';
import { Comment } from '../about-comment-list/Comment';

@Component({
  selector: 'app-about-form',
  standalone: false,
  templateUrl: './about-form.component.html',
  styleUrl: './about-form.component.scss'
})
export class AboutFormComponent {

  // Evento que escucha si se agregó un comentario, actualiza la lista
  @Output() commentAdded = new EventEmitter<void>();

  formAbout = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required]),
  });

  constructor (
    private commentService: CommentDataService
  ){}

  onSubmit() {
    if (this.formAbout.valid) {
    const comment = {
      name: this.formAbout.value.name ?? '',
      lastname: this.formAbout.value.lastname ?? '',
      email: this.formAbout.value.email ?? '',
      comment: this.formAbout.value.comment ?? ''
    };

    this.commentService.postComment(comment).subscribe({
      next: (response) => {
        console.log('Comentario enviado:', response);
        this.formAbout.reset();
        this.commentAdded.emit();
      },
      error: (err) => {
        console.error('Error al enviar comentario:', err);
      }
    });
  } else {
    console.warn('Formulario inválido');
  }
  }
}
