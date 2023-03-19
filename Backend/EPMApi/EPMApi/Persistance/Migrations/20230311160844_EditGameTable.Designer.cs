﻿// <auto-generated />
using System;
using EPMApi.Persistance;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace EPMApi.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20230311160844_EditGameTable")]
    partial class EditGameTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("EPMApi.Models.Competition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Competitions");
                });

            modelBuilder.Entity("EPMApi.Models.CompetitionSeason", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CompetitionId")
                        .HasColumnType("int");

                    b.Property<int>("SeasonId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionId");

                    b.HasIndex("SeasonId");

                    b.ToTable("CompetitionSeasons");
                });

            modelBuilder.Entity("EPMApi.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CompetitionSeasonId")
                        .HasColumnType("int");

                    b.Property<bool>("IsCompleted")
                        .HasColumnType("bit");

                    b.Property<bool>("IsHomeGame")
                        .HasColumnType("bit");

                    b.Property<int?>("ScoreTeam1")
                        .HasColumnType("int");

                    b.Property<int?>("ScoreTeam2")
                        .HasColumnType("int");

                    b.Property<int?>("Spectators")
                        .HasColumnType("int");

                    b.Property<string>("Team1")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Team2")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionSeasonId");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("EPMApi.Models.GamePlayer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Assists")
                        .HasColumnType("int");

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<int>("Goals")
                        .HasColumnType("int");

                    b.Property<bool>("IsBench")
                        .HasColumnType("bit");

                    b.Property<bool>("IsPlayed")
                        .HasColumnType("bit");

                    b.Property<bool>("IsRedCard")
                        .HasColumnType("bit");

                    b.Property<bool>("IsRegistered")
                        .HasColumnType("bit");

                    b.Property<double>("Minutes")
                        .HasColumnType("float");

                    b.Property<int>("PlayerId")
                        .HasColumnType("int");

                    b.Property<int>("YellowCards")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.HasIndex("PlayerId");

                    b.ToTable("GamePlayers");
                });

            modelBuilder.Entity("EPMApi.Models.Player", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime?>("DateOfBirth")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<string>("PicturePath")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PositionId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("PositionId");

                    b.ToTable("Players");
                });

            modelBuilder.Entity("EPMApi.Models.PlayerStats", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Appearances")
                        .HasColumnType("int");

                    b.Property<int>("Assists")
                        .HasColumnType("int");

                    b.Property<int>("CompetitionSeasonId")
                        .HasColumnType("int");

                    b.Property<int>("Goals")
                        .HasColumnType("int");

                    b.Property<int>("PlayerId")
                        .HasColumnType("int");

                    b.Property<int>("RedCards")
                        .HasColumnType("int");

                    b.Property<int>("SubstituteAppearances")
                        .HasColumnType("int");

                    b.Property<int>("YellowCards")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CompetitionSeasonId");

                    b.HasIndex("PlayerId");

                    b.ToTable("PlayerStats");
                });

            modelBuilder.Entity("EPMApi.Models.Position", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShortName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Positions");
                });

            modelBuilder.Entity("EPMApi.Models.Season", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Seasons");
                });

            modelBuilder.Entity("EPMApi.Models.CompetitionSeason", b =>
                {
                    b.HasOne("EPMApi.Models.Competition", "Competition")
                        .WithMany()
                        .HasForeignKey("CompetitionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EPMApi.Models.Season", "Season")
                        .WithMany()
                        .HasForeignKey("SeasonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Competition");

                    b.Navigation("Season");
                });

            modelBuilder.Entity("EPMApi.Models.Game", b =>
                {
                    b.HasOne("EPMApi.Models.CompetitionSeason", "CompetitionSeason")
                        .WithMany()
                        .HasForeignKey("CompetitionSeasonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CompetitionSeason");
                });

            modelBuilder.Entity("EPMApi.Models.GamePlayer", b =>
                {
                    b.HasOne("EPMApi.Models.Game", "Game")
                        .WithMany()
                        .HasForeignKey("GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EPMApi.Models.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");

                    b.Navigation("Player");
                });

            modelBuilder.Entity("EPMApi.Models.Player", b =>
                {
                    b.HasOne("EPMApi.Models.Position", "Position")
                        .WithMany()
                        .HasForeignKey("PositionId");

                    b.Navigation("Position");
                });

            modelBuilder.Entity("EPMApi.Models.PlayerStats", b =>
                {
                    b.HasOne("EPMApi.Models.CompetitionSeason", "CompetitionSeason")
                        .WithMany()
                        .HasForeignKey("CompetitionSeasonId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EPMApi.Models.Player", "Player")
                        .WithMany()
                        .HasForeignKey("PlayerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("CompetitionSeason");

                    b.Navigation("Player");
                });
#pragma warning restore 612, 618
        }
    }
}
