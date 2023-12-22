import { Request, Response } from "express";
import { Participant } from "../models/participants";
import { randomUUID } from "node:crypto";

export const listParticipants = async (req: Request, res: Response) => {
  let list = await Participant.findAll();

  res.json({ list });
};

export const createParticipant = async (req: Request, res: Response) => {
  let { name, surname, username, xp, avatarurl, socialurl } = req.body;

  let newParticipant = await Participant.create({
    id: randomUUID(),
    name,
		surname,
		username,
		xp,
		avatarurl,
		socialurl
  });

  res.status(201).send();
};

export const updateParticipant = async (req: Request, res: Response) => {
  let participant = await Participant.findByPk(req.params.id);
	let { name, surname, username, xp, avatarurl, socialurl } = req.body;

	if (participant){
		participant.name = name;
		participant.surname = surname;
		participant.username = username;
		participant.xp = xp;
		participant.avatarurl = avatarurl;
		participant.socialurl = socialurl;
	}

  res.status(201).send();
};

export const deleteParticipant = async (req: Request, res: Response) => {
	let participant = await Participant.findByPk(req.params.id);

	if (participant) {
		participant.destroy();
		res.status(204).send();
	} else
	res.status(404).json({ error: "Phrase not found." });
}