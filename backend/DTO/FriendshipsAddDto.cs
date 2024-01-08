using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.DTO
{
    public class FriendshipsAddDto
    {
        [Required]
        public string Title { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Content { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string? Image { get; set; }
        [Required]
        public DateTime Year { get; set;}
    }
}