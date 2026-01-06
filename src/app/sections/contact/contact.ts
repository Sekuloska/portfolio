import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly emailAddress = 'kika-sekuloska@hotmail.com';
  private readonly linkedinUrl = 'https://www.linkedin.com/in/hristina-sekuloska/';
  private readonly githubUrl = 'https://github.com/Sekuloska';

  private readonly subject = encodeURIComponent('Regarding your portfolio');
  private readonly body = encodeURIComponent("Hello Hristina,\n\nI came across your portfolio and would like to connect with you.\nI’m interested in discussing potential opportunities and learning more about your work.\n\nLooking forward to hearing from you.\n\nBest regards,\n");
  public readonly mailtoLink = `mailto:${this.emailAddress}?subject=${this.subject}&body=${this.body}`;

  public readonly contactMethods: ContactMethod[] = [
    {
      id: 'linkedin',
      icon: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Profile',
      href: this.linkedinUrl,
      external: true,
      ariaLabel: 'LinkedIn Profile',
    },
    {
      id: 'github',
      icon: 'github',
      title: 'GitHub',
      subtitle: 'Profile',
      href: this.githubUrl,
      external: true,
      ariaLabel: 'GitHub Profile',
    },
    {
      id: 'email',
      icon: 'email',
      title: 'Email',
      subtitle: '',
      href: this.mailtoLink,
      external: true,
      ariaLabel: 'Send an email',
    },
  ];
}

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  href: string;
  external: boolean;
  ariaLabel: string;
}
